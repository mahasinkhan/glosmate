const fs = require('fs');

fs.writeFileSync('app/globals.css', `@import "tailwindcss";

html { scroll-behavior: smooth; }
body {
  background: #0a0a0a;
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.big-heading {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: -0.04em;
}

.section-label {
  font-family: 'Courier New', monospace;
  font-size: 0.72rem;
  color: #666;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
  text-decoration: none;
}
.nav-link:hover, .nav-link.active { color: #fff; }

.tag-chip {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.28rem 0.85rem;
  border-radius: 9999px;
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.1);
}

.card-glass {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 1.25rem;
  backdrop-filter: blur(12px);
  transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
}
.card-glass:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.15);
  transform: translateY(-6px);
  box-shadow: 0 24px 60px rgba(0,0,0,0.4);
}

.glow-green { color: #4ade80; }
.glow-purple { color: #a78bfa; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

@keyframes float3d {
  0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
  33% { transform: translateY(-15px) rotateX(5deg) rotateY(10deg); }
  66% { transform: translateY(-8px) rotateX(-3deg) rotateY(-8deg); }
}
.float3d { animation: float3d 8s ease-in-out infinite; }

.gradient-border {
  position: relative;
  border-radius: 1.25rem;
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 1.26rem;
  background: linear-gradient(135deg, rgba(74,222,128,0.4), rgba(167,139,250,0.4), rgba(96,165,250,0.2));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.gradient-border:hover::before { opacity: 1; }
`);

fs.writeFileSync('components/sections/Navbar.tsx', `"use client";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Features", href: "/features" },
  { label: "Our Team", href: "/our-team" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#4ade80,#a78bfa)'}}>
            <span className="text-black font-bold text-sm">G</span>
          </div>
          <span className="text-white font-bold text-lg">Glosmate Tech</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={"nav-link" + (pathname === link.href ? " active" : "")}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
          style={{background:'linear-gradient(135deg,#4ade80,#22c55e)', color:'#000'}}>
          Get Quote <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>
          <SheetContent style={{background:'#0a0a0a', borderColor:'rgba(255,255,255,0.08)'}}>
            <Link href="/" className="flex items-center gap-2 mb-10 mt-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#4ade80,#a78bfa)'}}>
                <span className="text-black font-bold text-sm">G</span>
              </div>
              <span className="text-white font-bold text-lg">Glosmate Tech</span>
            </Link>
            <ul className="flex flex-col gap-7">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base font-medium text-gray-300 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className="text-center py-3 rounded-full font-semibold text-black"
                style={{background:'linear-gradient(135deg,#4ade80,#22c55e)'}}>
                Get Quote
              </a>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}`);

fs.writeFileSync('components/sections/Hero.tsx', `"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as THREE from "three";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
  { value: "4.9★", label: "Client Rating" },
];

const techs = ["React Native", "Flutter", "Next.js", "Django", "Node.js", "Swift", "Kotlin", "AWS", "TypeScript", "PostgreSQL"];

function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const mat = new THREE.MeshPhongMaterial({
      color: 0x4ade80,
      emissive: 0x0a2a0a,
      specular: 0xffffff,
      shininess: 80,
      wireframe: false,
      transparent: true,
      opacity: 0.15,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    const wireMat = new THREE.MeshBasicMaterial({ color: 0x4ade80, wireframe: true, transparent: true, opacity: 0.25 });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.01);
    group.add(wireMesh);

    const rings = [1.8, 2.4, 3.0];
    rings.forEach((r, i) => {
      const rGeo = new THREE.TorusGeometry(r, 0.015, 8, 80);
      const rMat = new THREE.MeshBasicMaterial({ color: i === 0 ? 0x4ade80 : 0xa78bfa, transparent: true, opacity: 0.2 });
      const ring = new THREE.Mesh(rGeo, rMat);
      ring.rotation.x = Math.PI / (2.5 + i * 0.5);
      ring.rotation.y = i * 0.8;
      group.add(ring);
    });

    const light1 = new THREE.PointLight(0x4ade80, 3, 10);
    light1.position.set(3, 3, 3);
    scene.add(light1);
    const light2 = new THREE.PointLight(0xa78bfa, 2, 10);
    light2.position.set(-3, -2, 2);
    scene.add(light2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      group.rotation.x += 0.001;
      group.children.forEach((child, i) => {
        if (i > 1) {
          (child as THREE.Mesh).rotation.z += 0.003 * (i - 1);
          (child as THREE.Mesh).rotation.x += 0.002 * (i - 1);
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(frame); renderer.dispose(); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{background:'#0a0a0a'}}>

      {/* BG image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="bg"
          className="w-full h-full object-cover"
          style={{opacity:0.08}}
        />
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 60% 50%, rgba(74,222,128,0.07) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(167,139,250,0.07) 0%, transparent 60%)'}} />
      </div>

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-10 opacity-80">
        <ThreeCanvas />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span className="tag-chip mb-6 inline-block">India's #1 Affordable Development Agency</span>
          </motion.div>

          <motion.h1
            className="big-heading text-white mb-6"
            initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
          >
            Build digital<br />
            <span style={{background:'linear-gradient(135deg,#4ade80,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>
              products
            </span><br />
            that stand out.
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-4 leading-relaxed max-w-lg"
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}
          >
            Professional iOS, Android & Web apps starting at{" "}
            <span className="text-white font-bold">₹49,999</span>.
            Enterprise-grade solutions for startups and growing businesses.
          </motion.p>

          <motion.div
            className="flex items-center gap-2 mb-10"
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:0.3}}
          >
            <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-500 text-sm">Free consultation • No upfront payment • On-time delivery</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.4}}
          >
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{background:'linear-gradient(135deg,#4ade80,#22c55e)', color:'#000', boxShadow:'0 0 40px rgba(74,222,128,0.3)'}}>
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 font-medium text-base px-8 py-4 rounded-full transition-all hover:bg-white/10"
              style={{border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.8)'}}>
              View Services →
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8"
            style={{borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'2rem'}}
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.5}}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="relative z-20 pb-12" style={{borderTop:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-5 font-medium">Technologies We Work With</p>
        </div>
        <div style={{overflow:'hidden', maskImage:'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)'}}>
          <div className="marquee-track gap-3">
            {[...techs,...techs].map((t,i) => (
              <span key={i} className="tag-chip mx-2">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/Features.tsx', `"use client";
import { motion } from "framer-motion";
import { Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    label: "/mobile",
    title: "Mobile App Development",
    description: "Native iOS & Android apps built with Swift, Kotlin, and React Native. High-performance, scalable mobile solutions.",
    points: ["Native iOS & Android", "Cross-Platform (React Native/Flutter)", "App Store Optimization", "Post-launch Maintenance"],
    accent: "#4ade80",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    icon: Globe,
    label: "/web",
    title: "Web Development",
    description: "Modern, responsive web apps using React, Next.js, and Node.js. SEO-optimized, lightning-fast, built to scale.",
    points: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
    accent: "#60a5fa",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
  {
    icon: Palette,
    label: "/design",
    title: "UI/UX Design",
    description: "User-centered design combining aesthetics with function. Digital experiences people actually enjoy.",
    points: ["User Interface Design", "UX Strategy & Research", "Prototyping & Wireframing", "Design Systems"],
    accent: "#a78bfa",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity:0, y:40 }, show: { opacity:1, y:0, transition: { duration:0.7, ease:[0.16,1,0.3,1] } } };

export default function Features() {
  return (
    <section id="services" className="py-28 px-6" style={{background:'#0d0d0d'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
        >
          <span className="section-label">/what we offer</span>
          <h2 className="big-heading text-white mb-6" style={{fontSize:'clamp(2rem,5vw,3.8rem)'}}>
            Premium development<br />services.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">Cutting-edge digital solutions that drive growth and real user engagement.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container} initial="hidden" whileInView="show" viewport={{once:true}}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={item} className="card-glass gradient-border overflow-hidden flex flex-col">
                <div className="h-44 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" style={{opacity:0.5}} />
                  <div className="absolute inset-0" style={{background:`linear-gradient(to top, #0d0d0d, transparent)`}} />
                  <div className="absolute top-4 left-4">
                    <span className="section-label mb-0" style={{color: service.accent}}>{service.label}</span>
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{background:`rgba(${service.accent === '#4ade80' ? '74,222,128' : service.accent === '#60a5fa' ? '96,165,250' : '167,139,250'},0.1)`}}>
                    <Icon className="h-5 w-5" style={{color: service.accent}} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <ul className="flex flex-col gap-2.5 pt-4 flex-1" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{background: service.accent}} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/About.tsx', `"use client";
import { motion } from "framer-motion";

const projects = [
  {
    label: "/e-commerce",
    title: "Premium Retail Platform",
    description: "Complete e-commerce with real-time inventory, secure payments, and analytics dashboard.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    accent: "#4ade80",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    label: "/healthcare",
    title: "Medical Management System",
    description: "Healthcare platform for patient management, appointments, and telemedicine.",
    tags: ["Flutter", "Python", "PostgreSQL", "WebRTC"],
    accent: "#60a5fa",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    label: "/education",
    title: "Learning Management System",
    description: "Interactive e-learning with course management, video streaming, and progress tracking.",
    tags: ["React", "Express.js", "MySQL", "AWS"],
    accent: "#a78bfa",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
];

export default function About() {
  return (
    <section id="portfolio" className="py-28 px-6" style={{background:'#080808'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <span className="section-label">/our work</span>
          <h2 className="big-heading text-white mb-6" style={{fontSize:'clamp(2rem,5vw,3.8rem)'}}>Featured projects.</h2>
          <p className="text-gray-500 text-lg max-w-xl">Successful digital transformations across industries.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="card-glass gradient-border overflow-hidden flex flex-col"
              initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:0.7,delay:idx*0.15,ease:[0.16,1,0.3,1]}}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" style={{opacity:0.55}} />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, #080808 0%, transparent 60%)'}} />
                <div className="absolute top-4 left-4">
                  <span style={{fontFamily:'Courier New', fontSize:'0.72rem', color: project.accent, letterSpacing:'0.1em'}}>{project.label}</span>
                </div>
              </div>
              <div className="p-7 flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/WhyChooseUs.tsx', `"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, DollarSign, Clock, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Zap, label: "/speed", title: "Rapid Delivery", description: "Agile methodology ensures on-time delivery without cutting corners or sacrificing quality.", accent: "#fbbf24" },
  { icon: DollarSign, label: "/pricing", title: "Cost-Effective", description: "Enterprise-quality development at the most competitive prices anywhere in India.", accent: "#4ade80" },
  { icon: Clock, label: "/support", title: "24/7 Support", description: "Round-the-clock technical support and proactive maintenance for every client.", accent: "#60a5fa" },
  { icon: Shield, label: "/security", title: "Secure Solutions", description: "Enterprise-grade security and data protection built into every product we ship.", accent: "#a78bfa" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current,
      { backgroundPositionX: "0%" },
      { backgroundPositionX: "100%", scrollTrigger: { trigger: headingRef.current, start: "top 80%", end: "bottom 20%", scrub: 1 }, ease: "none" }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-28 px-6" style={{background:'#0d0d0d'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <span className="section-label">/why choose us</span>
            <h2
              ref={headingRef}
              className="big-heading mb-6"
              style={{
                fontSize:'clamp(2rem,5vw,3.8rem)',
                background:'linear-gradient(135deg, #fff 30%, #4ade80 60%, #a78bfa 100%)',
                backgroundSize:'200%',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
              }}
            >
              Built for growth,<br />trusted by all.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">We combine technical mastery with real business understanding to deliver products that perform — not just look great.</p>
            <div className="rounded-2xl overflow-hidden" style={{border:'1px solid rgba(255,255,255,0.06)'}}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="team" className="w-full h-64 object-cover" style={{opacity:0.5}} />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="card-glass gradient-border p-7 flex flex-col gap-4"
                  initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{duration:0.6,delay:idx*0.12}}
                >
                  <span className="section-label mb-0" style={{color: reason.accent}}>{reason.label}</span>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{background:`rgba(0,0,0,0.3)`,border:`1px solid ${reason.accent}30`}}>
                    <Icon className="h-5 w-5" style={{color: reason.accent}} />
                  </div>
                  <h3 className="text-base font-bold text-white">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/Team.tsx', `"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ayan Khan",
    initials: "AK",
    role: "Founder & CEO",
    label: "/strategy",
    bio: "5+ years in business strategy, marketing, and project management. Drives company vision and builds strong client relationships.",
    skills: ["Strategy", "Marketing", "Management"],
    accent: "#4ade80",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Aryan Saini",
    initials: "AS",
    role: "CEO & Lead Developer",
    label: "/engineering",
    bio: "4+ years in full-stack development. Expert in mobile apps, web applications, and 3D game development across all platforms.",
    skills: ["Full Stack", "Mobile Apps", "3D Games", "DevOps"],
    accent: "#a78bfa",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="our-team" className="py-28 px-6" style={{background:'#080808'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <span className="section-label">/meet the team</span>
          <h2 className="big-heading text-white mb-6" style={{fontSize:'clamp(2rem,5vw,3.8rem)'}}>
            The people behind<br />the products.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">Dedicated professionals committed to delivering excellence on every project.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              className="card-glass gradient-border overflow-hidden"
              initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:0.7,delay:idx*0.2}}
              whileHover={{y:-8}}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" style={{opacity:0.4, filter:'grayscale(30%)'}} />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, #0d0d0d 0%, transparent 60%)'}} />
                <div className="absolute top-4 left-4">
                  <span style={{fontFamily:'Courier New',fontSize:'0.72rem',color:member.accent,letterSpacing:'0.1em'}}>{member.label}</span>
                </div>
              </div>
              <div className="p-7 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-semibold mt-1" style={{color: member.accent}}>{member.role}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 pt-4" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                  {member.skills.map((skill) => (
                    <span key={skill} className="tag-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/Contact.tsx', `"use client";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "+91 86976 36393", accent: "#4ade80" },
  { icon: Mail, label: "Email", value: "glosmatetech@gmail.com", accent: "#60a5fa" },
  { icon: Clock, label: "Availability", value: "24/7 Support", accent: "#a78bfa" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6" style={{background:'#0a0a0a'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <span className="section-label">/get in touch</span>
          <h2 className="big-heading text-white mb-6" style={{fontSize:'clamp(2rem,5vw,3.8rem)'}}>
            Let's build something<br />amazing together.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">Transform your idea into a successful digital product. Get a free consultation and detailed estimate.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="card-glass p-7 flex flex-col gap-3"
                initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:0.6,delay:idx*0.12}}
              >
                <Icon className="h-6 w-6" style={{color: item.accent}} />
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600">{item.label}</p>
                <p className="text-base font-semibold text-white">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
        >
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" alt="office" className="absolute inset-0 w-full h-full object-cover" style={{opacity:0.1}} />
          <div className="relative p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8" style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'1rem'}}>
            <div>
              <span className="section-label" style={{color:'#555'}}>/instant response</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Chat on WhatsApp now.</h3>
              <p className="text-gray-500 max-w-md">Get immediate assistance and a detailed quote within minutes.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-black transition-all hover:scale-105"
                style={{background:'linear-gradient(135deg,#4ade80,#22c55e)', boxShadow:'0 0 40px rgba(74,222,128,0.25)'}}>
                Chat Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:glosmatetech@gmail.com"
                className="inline-flex items-center gap-2 text-gray-500 font-medium px-8 py-3 text-sm hover:text-white transition-colors justify-center">
                Send an Email →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync('components/sections/Footer.tsx', `import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/#contact" },
];
const services = ["Mobile App Development", "Web Development", "UI/UX Design", "Consultation"];

export default function Footer() {
  return (
    <footer className="px-6 pt-20 pb-10" style={{background:'#050505', borderTop:'1px solid rgba(255,255,255,0.05)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#4ade80,#a78bfa)'}}>
                <span className="text-black font-bold text-sm">G</span>
              </div>
              <span className="text-white font-bold text-lg">Glosmate Tech</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-600">Premium Development Agency</p>
            <p className="text-sm leading-relaxed text-gray-500">Transforming ideas into exceptional digital experiences with cutting-edge technology.</p>
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors">
              Chat on WhatsApp →
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-gray-500">+91 86976 36393</li>
              <li className="text-sm text-gray-500">glosmatetech@gmail.com</li>
              <li className="text-sm text-gray-500">Kolkata, West Bengal</li>
              <li className="text-sm text-green-400 font-semibold">Available 24/7</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <p className="text-xs text-gray-700">© 2023 Glosmate Tech. All rights reserved.</p>
          <p className="text-xs text-gray-700">India's Premier Affordable Development Agency</p>
        </div>
      </div>
    </footer>
  );
}`);

console.log('Advanced design complete!');