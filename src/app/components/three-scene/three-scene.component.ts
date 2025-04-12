import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { gsap } from 'gsap';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ThreeSceneComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cube!: THREE.Mesh;
  private particles!: THREE.Points;
  private animationFrameId!: number;
  private clock = new THREE.Clock();
  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initThree();
    this.createScene();
    this.startRenderingLoop();
    this.addEventListeners();
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
    cancelAnimationFrame(this.animationFrameId);
    // Dispose resources
    this.scene.remove(this.cube);
    this.scene.remove(this.particles);
    (this.cube.material as THREE.Material).dispose();
    (this.cube.geometry as THREE.BufferGeometry).dispose();
    (this.particles.material as THREE.Material).dispose();
    (this.particles.geometry as THREE.BufferGeometry).dispose();
    this.renderer.dispose();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
  }

  private initThree(): void {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 30;
    
    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  private createScene(): void {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
    
    // Create cube with developer's initials
    this.createCube();
    
    // Create particle background
    this.createParticles();
  }

  private createCube(): void {
    // Create cube geometry
    const geometry = new THREE.BoxGeometry(6, 6, 6);
    
    // Create materials for each side
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x3f51b5, metalness: 0.2, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x303f9f, metalness: 0.2, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x5c6bc0, metalness: 0.2, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x3949ab, metalness: 0.2, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x7986cb, metalness: 0.2, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x9fa8da, metalness: 0.2, roughness: 0.5 })
    ];
    
    // Create cube mesh with materials
    this.cube = new THREE.Mesh(geometry, materials);
    
    // Add text to cube (developer's initials - "S")
    this.addTextToCube();
    
    // Position cube
    this.cube.position.set(0, 0, 0);
    
    // Add to scene
    this.scene.add(this.cube);
    
    // Animate cube entrance with GSAP
    gsap.from(this.cube.position, {
      y: -50,
      duration: 2,
      ease: "elastic.out(1, 0.3)"
    });
    
    gsap.from(this.cube.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 2.5,
      ease: "elastic.out(1, 0.3)"
    });
  }

  private addTextToCube(): void {
    // This is a simplified version - in a full implementation, 
    // we would use TextGeometry from Three.js and add it to each side of the cube
    // For now, we'll leave the cube as is with colored sides
  }

  private createParticles(): void {
    // Create particle geometry
    const particleCount = 3000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    
    // Set positions and colors for each particle
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Positions - random distribution in a sphere
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      
      // Colors - gradient based on position
      color.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    // Create particle system
    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particles);
  }

  private startRenderingLoop(): void {
    const component = this;
    
    // Animation loop
    function animate() {
      component.animationFrameId = requestAnimationFrame(animate);
      
      const elapsedTime = component.clock.getElapsedTime();
      
      // Smoothly interpolate mouse position
      component.mouseX += (component.targetMouseX - component.mouseX) * 0.05;
      component.mouseY += (component.targetMouseY - component.mouseY) * 0.05;
      
      // Rotate cube
      component.cube.rotation.x = elapsedTime * 0.15;
      component.cube.rotation.y = elapsedTime * 0.2;
      
      // Make cube react slightly to mouse movement
      component.cube.rotation.x += component.mouseY * 0.001;
      component.cube.rotation.y += component.mouseX * 0.001;
      
      // Rotate particles
      component.particles.rotation.y = elapsedTime * 0.05;
      
      // Make particles react to mouse
      component.particles.rotation.x = component.mouseY * 0.0005;
      component.particles.rotation.y += component.mouseX * 0.0005;
      
      // Render scene
      component.renderer.render(component.scene, component.camera);
    }
    
    animate();
  }

  private addEventListeners(): void {
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private removeEventListeners(): void {
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    this.targetMouseX = (event.clientX - this.windowHalfX) * 0.5;
    this.targetMouseY = (event.clientY - this.windowHalfY) * 0.5;
  }
}
