"use client";

import { useState } from 'react';
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
  Briefcase,
  Menu,
  X,
  Brain,
  Palette,
  Wrench
} from 'lucide-react';

import SplitText from "../components/SplitText";
import SplineViewer from '../components/SplineViewer';
import SplineTarjeta1 from '../components/SplineTarjeta1';



export default function WilbertPortfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Inicio', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'Acerca de', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'Habilidades', icon: <Code className="h-4 w-4" /> },
    { id: 'projects', label: 'Proyectos', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'contact', label: 'Contacto', icon: <Mail className="h-4 w-4" /> }
  ];

  const sidebarItems = [
    {
      href: '/apps',
      label: 'Aplicativos móviles',
      icon: <Smartphone className="h-5 w-5" />,
      description: 'Apps nativas y híbridas'
    },
    {
      href: '/webs',
      label: 'Páginas web',
      icon: <Monitor className="h-5 w-5" />,
      description: 'Sitios web modernos'
    },
    {
      href: '/programs',
      label: 'Programas',
      icon: <Brain className="h-5 w-5" />,
      description: 'Software y herramientas'
    },
    {
      href: '/designs',
      label: 'Diseños',
      icon: <Palette className="h-5 w-5" />,
      description: 'UI/UX y gráficos'
    },
    {
      href: '/creations',
      label: 'Creaciones',
      icon: <Wrench className="h-5 w-5" />,
      description: 'Proyectos únicos'
    },
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action: (() => void) | string | any) => {
  if (typeof action === 'function') {
    action();
  }
  setIsMenuOpen(false);
};

  const renderContent = () => {
  switch (activeTab) {
    case 'home':
      return (
        <div className="flex flex-col h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          {/* Main: header y spline */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* 🎬 Sección Spline en pantalla completa */}
           <div className="relative h-screen w-full" onWheel={(e)=>e.stopPropagation()}>
                  <SplineViewer />
            </div>


            {/* 🎯 Contenido desplazable */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Presentación principal */}
                <div className="text-center mb-12">
                  <div className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-2xl">
                    <span className="text-white text-3xl md:text-5xl font-bold">WC</span>
                  </div>
                  <SplitText
                    text="Wilbert Junior Cardenas Alejo"
                    className="text-2xl md:text-4xl font-bold text-white mb-2"
                    delay={100} duration={0.6}
                    ease="power3.out" splitType="chars"
                    from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                    threshold={0.1} rootMargin="-100px" textAlign="center"
                  />
                  <SplitText
                    text="Ingeniero de Sistemas"
                    className="text-lg md:text-2xl text-blue-400 mb-4 font-semibold"
                    delay={200} duration={0.6}
                    ease="power3.out" splitType="chars"
                    from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
                    threshold={0.1} rootMargin="-100px" textAlign="center"
                  />
                  <div className="flex items-center justify-center gap-2 text-gray-300 mb-6">
                    <MapPin className="h-4 w-4" />
                    <span>Cusco, Perú</span>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Especialista en desarrollo de software con amplia experiencia en aplicaciones web, móviles, administración de servidores, redes y tecnologías cloud.
                  </p>
                </div>

                {/* 🎨 Tarjetas Spline */}
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SplineTarjeta1
                      className="aspect-video w-full rounded-lg shadow-lg"
                      sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode"
                    />
                    <SplineTarjeta1
                      className="aspect-video w-full rounded-lg shadow-lg"
                      sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode"
                    />
                    <SplineTarjeta1
                      className="aspect-video w-full rounded-lg shadow-lg"
                      sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode"
                    />
                  </div>
                </div>


                {/* 📄 Botón Descargar CV */}
                <div className="text-center pb-8">
                  <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      );


      case 'about':
        return (
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Acerca de Mí</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Trayectoria Profesional</h3>
                <p className="text-gray-300 mb-4">
                  Como Ingeniero de Sistemas, he dedicado mi carrera al dominio de múltiples tecnologías y disciplinas dentro del desarrollo de software.
                </p>
                <p className="text-gray-300">
                  A lo largo de los años, he trabajado en proyectos que van desde aplicaciones web empresariales hasta sistemas móviles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Filosofía de Trabajo</h3>
                <p className="text-gray-300 mb-4">
                  Creo firmemente en la importancia de mantenerse actualizado con las últimas tecnologías y mejores prácticas.
                </p>
                <p className="text-gray-300">
                  La calidad del código, la seguridad y la experiencia del usuario son pilares fundamentales en cada proyecto que emprendo.
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Áreas de Especialización</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Desarrollo de Aplicaciones Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Aplicaciones Móviles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Administración de Servidores</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5 text-orange-400" />
                  <span className="text-gray-300">Configuración de Redes</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Habilidades Técnicas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4 capitalize">
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
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-700/50"
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
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:border-gray-600 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <span className="text-sm text-blue-300 bg-blue-900/50 px-2 py-1 rounded border border-blue-700/50">
                        {project.type}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded border ${
                      project.status === 'Completado'
                        ? 'bg-green-900/50 text-green-300 border-green-700/50'
                        : 'bg-orange-900/50 text-orange-300 border-orange-700/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Ver Proyecto
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm transition-colors">
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
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">wilbert.cardenas@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Cusco, Perú</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Disponible para proyectos</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-8">Redes Sociales</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    <Github className="h-4 w-4" />
                    GitHub
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Servicios Disponibles</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-white">Desarrollo Web</h4>
                    <p className="text-sm text-gray-400">Aplicaciones web completas y responsivas</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-white">Aplicaciones Móviles</h4>
                    <p className="text-sm text-gray-400">Apps nativas e híbridas para iOS y Android</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-white">Infraestructura Cloud</h4>
                    <p className="text-sm text-gray-400">Configuración y despliegue en la nube</p>
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WC</span>
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">Wilbert Cardenas</span>
                <Menu className="h-5 w-5 text-gray-300 ml-2" />
              </button>
            </div>

            <nav className="hidden lg:flex lg:space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-gray-800/95 backdrop-blur-md border-r border-gray-700 z-50 transform transition-transform duration-300 overflow-y-auto">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">W</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Portafolio</h2>
                  <p className="text-sm text-gray-400">Wilbert Dev</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Navegación Principal
              </h3>
              <ul className="space-y-2 mb-6">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => handleMenuItemClick(() => setActiveTab(tab.id))}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${
                        activeTab === tab.id
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="flex-shrink-0">
                        {tab.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {tab.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Portafolio
              </h3>
              <ul className="space-y-2">
                {sidebarItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleMenuItemClick(() => console.log(`Navegando a ${item.href}`))}
                      className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 ease-in-out"
                    >
                      <span className="flex-shrink-0 text-blue-400 group-hover:text-blue-300">
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-medium truncate">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800/50">
              <div className="text-center text-xs text-gray-400">
                <p>&copy; 2025 Wilbert</p>
                <p>Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </>
      )}

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-950/80 backdrop-blur-md border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">WC</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Wilbert Junior Cardenas Alejo</p>
                <p className="text-xs text-gray-400">Ingeniero de Sistemas</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
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
