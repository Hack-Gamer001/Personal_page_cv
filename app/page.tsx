"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  User,
  Mail,
  BookOpen,
  Code,
  Server,
  Smartphone,
  Monitor,
  Network,
  Database,
  Terminal,
  Award,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';

export default function WilbertPortfolio() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Inicio', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'Acerca de', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'Habilidades', icon: <Code className="h-4 w-4" /> },
    { id: 'projects', label: 'Proyectos', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'contact', label: 'Contacto', icon: <Mail className="h-4 w-4" /> }
  ];

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'Go', 'Rust', 'C++'],
    frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'FastAPI', 'Django', 'Spring Boot', '.NET Core', 'Laravel'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLite', 'Firebase'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Linux', 'Nginx', 'Apache'],
    mobile: ['React Native', 'Flutter', 'Ionic', 'Android Studio', 'Xcode'],
    tools: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'Figma', 'Jira', 'Slack']
  };

  const projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Aplicación web completa para gestión de inventarios, ventas y reportes empresariales',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      type: 'Web Application',
      status: 'Completado'
    },
    {
      title: 'App Móvil de Delivery',
      description: 'Aplicación móvil multiplataforma para servicio de delivery con geolocalización',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      type: 'Mobile App',
      status: 'En desarrollo'
    },
    {
      title: 'Infraestructura Cloud',
      description: 'Configuración y despliegue de servidores en AWS con alta disponibilidad',
      tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      type: 'DevOps',
      status: 'Completado'
    },
    {
      title: 'Sistema de Monitoreo de Red',
      description: 'Herramienta para monitoreo en tiempo real de dispositivos de red',
      tech: ['Python', 'FastAPI', 'MongoDB', 'Grafana'],
      type: 'Network Tool',
      status: 'Completado'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-white text-5xl font-bold">WC</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Wilbert Junior Cardenas Alejo</h1>
              <p className="text-2xl text-blue-600 mb-4 font-semibold">Ingeniero de Sistemas</p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span>Cusco, Perú</span>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Especialista en desarrollo de software con amplia experiencia en aplicaciones web, móviles, administración de servidores, redes y tecnologías cloud.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo Full Stack</h3>
                <p className="text-gray-600">Aplicaciones web modernas con tecnologías de vanguardia</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Infraestructura & DevOps</h3>
                <p className="text-gray-600">Servidores, contenedores y arquitecturas escalables</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo Móvil</h3>
                <p className="text-gray-600">Apps nativas e híbridas para iOS y Android</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </button>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Acerca de Mí</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trayectoria Profesional</h3>
                <p className="text-gray-700 mb-4">
                  Como Ingeniero de Sistemas, he dedicado mi carrera al dominio de múltiples tecnologías y disciplinas dentro del desarrollo de software.
                </p>
                <p className="text-gray-700">
                  A lo largo de los años, he trabajado en proyectos que van desde aplicaciones web empresariales hasta sistemas móviles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Filosofía de Trabajo</h3>
                <p className="text-gray-700 mb-4">
                  Creo firmemente en la importancia de mantenerse actualizado con las últimas tecnologías y mejores prácticas.
                </p>
                <p className="text-gray-700">
                  La calidad del código, la seguridad y la experiencia del usuario son pilares fundamentales en cada proyecto que emprendo.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Áreas de Especialización</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span>Desarrollo de Aplicaciones Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-green-600" />
                  <span>Aplicaciones Móviles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-purple-600" />
                  <span>Administración de Servidores</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5 text-orange-600" />
                  <span>Configuración de Redes</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Habilidades Técnicas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {category === 'languages' ? 'Lenguajes de Programación' :
                     category === 'frontend' ? 'Frontend' :
                     category === 'backend' ? 'Backend' :
                     category === 'databases' ? 'Bases de Datos' :
                     category === 'devops' ? 'DevOps & Cloud' :
                     category === 'mobile' ? 'Desarrollo Móvil' :
                     'Herramientas'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {project.type}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === 'Completado'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                      <ExternalLink className="h-4 w-4" />
                      Ver Proyecto
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm">
                      <Github className="h-4 w-4" />
                      Código
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">wilbert.cardenas@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Cusco, Perú</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Disponible para proyectos</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Redes Sociales</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                    <Github className="h-4 w-4" />
                    GitHub
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Servicios Disponibles</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">Desarrollo Web</h4>
                    <p className="text-sm text-gray-600">Aplicaciones web completas y responsivas</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">Aplicaciones Móviles</h4>
                    <p className="text-sm text-gray-600">Apps nativas e híbridas para iOS y Android</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">Infraestructura Cloud</h4>
                    <p className="text-sm text-gray-600">Configuración y despliegue en la nube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WC</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Wilbert Cardenas</span>
              </div>
            </div>
            <nav className="hidden md:flex md:space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="pb-12">{renderContent()}</main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">WC</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Wilbert Junior Cardenas Alejo</p>
                <p className="text-xs text-gray-600">Ingeniero de Sistemas</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Wilbert Cardenas. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Desarrollado con React y Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
