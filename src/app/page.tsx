"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Analyse",
          id: "analyse",
        },
        {
          name: "Méthodologie",
          id: "methodology",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SportAnalytics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Analyse Statistique & Modélisation"
      description="Nous fournissons uniquement de l'analyse statistique, de la modélisation et une cartographie rigoureuse de l'incertitude. Aucun conseil financier, aucun pari, aucune certitude."
      kpis={[
        {
          value: "99.8%",
          label: "Fiabilité Données",
        },
        {
          value: "12+",
          label: "Modèles Mathématiques",
        },
        {
          value: "15ms",
          label: "Latence API",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165183.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-elegant-senior-male-browsing-tablet_23-2148673420.jpg",
          alt: "Analyst 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-sitting-desk_23-2148349966.jpg",
          alt: "Analyst 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-with-disabilities-invalid-disabled-paralized-handicapped-immobilized-looking-camera-upset-tired-sitting-wheelchair-business-office-room-working-financial-project-with-team_482257-28442.jpg",
          alt: "Analyst 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-female-with-tablet_23-2148415952.jpg",
          alt: "Analyst 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/football-trainer-teaching-his-pupils_23-2149708046.jpg",
          alt: "Analyst 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Modélisation Avancée",
        },
        {
          type: "text",
          text: "Données Sécurisées",
        },
        {
          type: "text",
          text: "Transparence Totale",
        },
        {
          type: "text",
          text: "Latence Optimisée",
        },
        {
          type: "text",
          text: "Filtrage Intelligent",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Rigueur Analytique au Service de ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/illustration-business-concept_53876-37673.jpg",
          alt: "Analysis",
        },
        {
          type: "text",
          content: " la Précision",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Fiabilité et Transparence"
      tag="Données"
      metrics={[
        {
          id: "m1",
          value: "24/7",
          description: "Surveillance API",
        },
        {
          id: "m2",
          value: "<5s",
          description: "Temps calcul",
        },
        {
          id: "m3",
          value: "Validé",
          description: "Filtre Données",
        },
        {
          id: "m4",
          value: "Stable",
          description: "Variance Modèle",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Modélisation Probabiliste",
          description: "Utilisation de modèles Poisson et xG/xGA pour estimer les scénarios.",
          tag: "Analyse",
          imageSrc: "http://img.b2bpic.net/free-vector/sports-activities-25-solid-glyph-icon-pack-including-rugby-field-football-lifting-sport-lineicon_1142-21333.jpg",
        },
        {
          id: "f2",
          title: "Validation Rigoureuse",
          description: "Filtre automatique des données incohérentes et sources non vérifiées.",
          tag: "Data",
          imageSrc: "http://img.b2bpic.net/free-vector/creative-data-protection-25-flat-icon-pack-such-as-security-security-regulation-private-block_1142-22512.jpg",
        },
        {
          id: "f3",
          title: "Réduction de Biais",
          description: "Analyse multi-sources pour minimiser l'impact des outliers.",
          tag: "Robustesse",
          imageSrc: "http://img.b2bpic.net/free-photo/business-analysis-report-folder-icon_53876-14637.jpg",
        },
      ]}
      title="Notre Approche"
      description="Nous appliquons une méthodologie rigoureuse pour cartographier l'incertitude."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          title: "Standard",
          price: "Gratuit",
          period: "mensuel",
          features: [
            "Données match",
            "Analyse basique",
            "xG standard",
          ],
          button: {
            text: "Commencer",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165173.jpg",
          imageAlt: "Data and stats around person doing physical activity",
        },
        {
          id: "p2",
          title: "Analyste",
          price: "49€",
          period: "mensuel",
          features: [
            "Probabilités avancées",
            "xG/xGA complet",
            "Support API",
          ],
          button: {
            text: "Souscrire",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165183.jpg",
          imageAlt: "Data and stats around person doing physical activity",
        },
        {
          id: "p3",
          title: "Expert",
          price: "149€",
          period: "mensuel",
          features: [
            "API accès complet",
            "Modèles personnalisés",
            "Logs complets",
          ],
          button: {
            text: "Souscrire",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/illustration-business-concept_53876-37673.jpg",
          imageAlt: "Data and stats around person doing physical activity",
        },
      ]}
      title="Accès Modèles"
      description="Choisissez votre niveau d'analyse."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Marc L.",
          role: "Data Scientist",
          testimonial: "La rigueur sur la validation des données est impressionnante.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-senior-businessman-with-digital-tablet_1262-2373.jpg",
        },
        {
          id: "t2",
          name: "Sarah J.",
          role: "Analyste Sport",
          testimonial: "Une approche froide et analytique, enfin une vraie méthode.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-happy-man-with-basketball_23-2148239503.jpg",
        },
        {
          id: "t3",
          name: "Thomas V.",
          role: "Mathématicien",
          testimonial: "Le filtrage des données bruitées est parfaitement implémenté.",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-looking-teacher_53876-23045.jpg",
        },
        {
          id: "t4",
          name: "Julie M.",
          role: "Consultante",
          testimonial: "Je ne peux plus me passer des modèles de prédiction ici.",
          imageSrc: "http://img.b2bpic.net/free-photo/scientist-factory-using-tablet-check-photovoltaics-materials-parameters_482257-120526.jpg",
        },
        {
          id: "t5",
          name: "Nicolas B.",
          role: "Expert Stat",
          testimonial: "Excellent travail sur la cartographie de l'incertitude.",
          imageSrc: "http://img.b2bpic.net/free-photo/accounting-manager-reviewing-budget-numbers-after-monthly-costs_482257-90786.jpg",
        },
      ]}
      title="Retour des Analysts"
      description="Retours d'experts sur la fiabilité de nos modèles."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Méthodologie et Insights"
      blogs={[
        {
          id: "b1",
          category: "Méthodologie",
          title: "Comprendre le xG",
          excerpt: "Comment nous calculons l'espérance de but.",
          imageSrc: "http://img.b2bpic.net/free-vector/scientific-formulas-chalkboard_23-2148478986.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/stylish-adult-male-holding-tablet_23-2148673405.jpg",
          date: "10 Jan 2025",
        },
        {
          id: "b2",
          category: "Data",
          title: "Fiabilité Sources",
          excerpt: "Pourquoi nous évitons les réseaux sociaux.",
          imageSrc: "http://img.b2bpic.net/free-vector/20-data-protection-flat-color-icon-presentation-vector-icons-illustration_1142-15478.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-doctor-wearing-lab-coat_23-2149551157.jpg",
          date: "12 Jan 2025",
        },
        {
          id: "b3",
          category: "Statistiques",
          title: "Modèle Poisson",
          excerpt: "Fondations mathématiques de nos prévisions.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-data-logo-template_23-2149192866.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",
          date: "15 Jan 2025",
        },
      ]}
      description="Articles de recherche sur nos modèles statistiques."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Donnez-vous des conseils de paris ?",
          content: "Non, nous fournissons uniquement des analyses statistiques.",
        },
        {
          id: "q2",
          title: "Quelle est la source des données ?",
          content: "Nous utilisons uniquement des APIs professionnelles comme Opta, FBref et Sofascore.",
        },
        {
          id: "q3",
          title: "Puis-je avoir un accès complet ?",
          content: "Oui, via nos plans analyste ou expert.",
        },
      ]}
      title="Questions Fréquentes"
      faqsAnimation="slide-up"
      description="Tout savoir sur notre fonctionnement."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Besoin d'information ?"
      description="Posez vos questions sur notre méthodologie."
      imageSrc="http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160283.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="SportAnalytics"
      copyrightText="Analyse statistique basée sur données publiques."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
