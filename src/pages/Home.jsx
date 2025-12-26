import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  FolderKanban, 
  BookOpen, 
  Users,
  Diamond,
  Share2,
  LayoutGrid
} from 'lucide-react';

// Hero Section
function HeroSection() {
  return (
    <section className="bg-gray-300 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow-sm">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Connectez-vous,<br />
              Collaborez,<br />
              Réussissez.
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md">
              Entrepreneurs Guinée Connect est la plateforme dédiée aux jeunes entrepreneurs guinéens pour bâtir, innover et grandir ensemble.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn btn-primary">
                S'inscrire
              </Link>
              <Link to="/about" className="btn btn-outline">
                Découvrir la Plateforme
              </Link>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Équipe collaborant sur un projet"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section (3 cards)
function FeaturesSection() {
  const features = [
    {
      icon: Diamond,
      title: "Réseautage Stratégique",
      description: "Établissez des connexions significatives avec des pairs et des mentors pour développer votre réseau professionnel."
    },
    {
      icon: Share2,
      title: "Partage de Connaissances",
      description: "Accédez à une bibliothèque de ressources et partagez vos expériences pour une croissance mutuelle."
    },
    {
      icon: FolderKanban,
      title: "Gestion de Projets Simplifiée",
      description: "Organisez et suivez vos projets efficacement avec des outils collaboratifs intégrés."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-primary text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Modules Section (4 cards)
function ModulesSection() {
  const modules = [
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Échangez avec les membres et les équipes via une messagerie."
    },
    {
      icon: FolderKanban,
      title: "Gestion de Projets",
      description: "Planifiez, exécutez et suivez vos projets du début à la fin avec des outils."
    },
    {
      icon: BookOpen,
      title: "Bibliothèque de Ressources",
      description: "Accédez à des documents, guides, tutoriels et études de cas."
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Rejoignez des groupes, participez aux discussions et connectez-vous avec."
    }
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
          Modules clés de la Plateforme
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="card bg-white hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <module.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">
                {module.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Entrepreneurs Guinée Connect a transformé ma façon de travailler. J'ai trouvé des partenaires et des ressources inestimables qui ont propulsé mon enterprise.",
      author: "Fatoumata Diallo",
      role: "CEO, TechRenov",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "L'accès à un réseau de mentors m'a été crucial. La plateforme est facile à utiliser et pleine de fonctionnalités pour chaque entrepreneur.",
      author: "Mamadou Bah",
      role: "Fondateur, AgroVision",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Je recommande fortement cette plateforme à tous les jeunes entrepreneurs guinéens. C'est un véritable levier de croissance!",
      author: "Aïcha Camara",
      role: "Directrice, FashionForward",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
          Ce qu'ils disent de nous
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Profile Image */}
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-16 h-16 mx-auto rounded-full object-cover shadow-md"
              />
              
              <blockquote className="text-gray-600 text-sm italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-display font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-gray-400 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Prêt à faire passer votre entreprise au niveau supérieur ?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Rejoignez une communauté dynamique d'entrepreneurs guinéens, 
          accédez à des ressources exclusives et collaborez sur des projets innovants.
        </p>
        <Link 
          to="/register" 
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        >
          Rejoignez-nous aujourd'hui
        </Link>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
