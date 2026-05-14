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
import TimelinePhoneView from '@/components/cardStack/layouts/timelines/TimelinePhoneView';

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
          name: "Analyse",          id: "analyse"},
        {
          name: "Méthodologie",          id: "methodology"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="SportAnalytics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Moteur Analytique & API"
      description="Accédez à notre moteur de traitement de données pour des calculs statistiques, des modélisations probabilistes et des résultats d'analyse via nos endpoints API sécurisés."
      kpis={[
        {
          value: "99.8%",          label: "Fiabilité Données"},
        {
          value: "12+",          label: "Algorithmes"},
        {
          value: "15ms",          label: "Latence API"},
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165183.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-elegant-senior-male-browsing-tablet_23-2148673420.jpg",          alt: "Analyst 1"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-man-sitting-desk_23-2148349966.jpg",          alt: "Analyst 2"},
        {
          src: "http://img.b2bpic.net/free-photo/young-man-with-disabilities-invalid-disabled-paralized-handicapped-immobilized-looking-camera-upset-tired-sitting-wheelchair-business-office-room-working-financial-project-with-team_482257-28442.jpg",          alt: "Analyst 3"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-female-with-tablet_23-2148415952.jpg",          alt: "Analyst 4"},
        {
          src: "http://img.b2bpic.net/free-photo/football-trainer-teaching-his-pupils_23-2149708046.jpg",          alt: "Analyst 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Modélisation Avancée"},
        {
          type: "text",          text: "Endpoint API"},
        {
          type: "text",          text: "Calculs en Temps Réel"},
        {
          type: "text",          text: "Latence Optimisée"},
        {
          type: "text",          text: "Filtrage Intelligent"},
      ]}
    />
  </div>

  <div id="diagnostics" data-section="diagnostics">
      <TimelinePhoneView
      title="Diagnostic en temps réel"
      description="Visualisez le flux de données en continu pour identifier les anomalies instantanément."
      textboxLayout="split"
      animationType="slide-up"
      items={[
        {
          trigger: "Capture",          content: "Ingestion de données en temps réel via nos capteurs.",          imageOne: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165183.jpg?_wi=1"},
        {
          trigger: "Analyse",          content: "Le moteur identifie les écarts statistiques en direct.",          imageOne: "http://img.b2bpic.net/free-photo/business-analysis-report-folder-icon_53876-14637.jpg"},
        {
          trigger: "Rapport",          content: "Génération automatique des insights et alertes.",          imageOne: "http://img.b2bpic.net/free-photo/side-view-female-with-tablet_23-2148415952.jpg"}
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Architecture de Traitement "},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/illustration-business-concept_53876-37673.jpg",          alt: "Analysis"},
        {
          type: "text",          content: " de Haute Précision"},
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Puissance de Calcul"
      tag="Infrastructure"
      metrics={[
        {
          id: "m1",          value: "100M+",          description: "Points de données"},
        {
          id: "m2",          value: "<5ms",          description: "Traitement"},
        {
          id: "m3",          value: "API REST",          description: "Endpoints"},
        {
          id: "m4",          value: "99.9%",          description: "Uptime Service"},
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
          id: "f1",          title: "Processing Pipeline",          description: "Traitement asynchrone des données pour des résultats rapides.",          tag: "Moteur",          imageSrc: "http://img.b2bpic.net/free-vector/sports-activities-25-solid-glyph-icon-pack-including-rugby-field-football-lifting-sport-lineicon_1142-21333.jpg"},
        {
          id: "f2",          title: "Calculs Modulaires",          description: "Modèles interchangeables pour répondre à vos besoins spécifiques.",          tag: "Algo",          imageSrc: "http://img.b2bpic.net/free-vector/creative-data-protection-25-flat-icon-pack-such-as-security-security-regulation-private-block_1142-22512.jpg"},
        {
          id: "f3",          title: "API Documentation",          description: "Documentation complète pour une intégration transparente.",          tag: "Connect",          imageSrc: "http://img.b2bpic.net/free-photo/business-analysis-report-folder-icon_53876-14637.jpg"},
      ]}
      title="Moteur Analytique"
      description="Une suite d'outils dédiée à la transformation de données brutes en insights exploitables."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          title: "Discovery",          price: "Gratuit",          period: "mensuel",          features: [
            "Accès API limité",            "Calculs basiques",            "Support communauté"],
          button: {
            text: "Démarrer"},
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165173.jpg"},
        {
          id: "p2",          title: "Pro",          price: "99€",          period: "mensuel",          features: [
            "Accès API complet",            "Modèles avancés",            "Temps réel"],
          button: {
            text: "Souscrire"},
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165183.jpg?_wi=2"},
        {
          id: "p3",          title: "Enterprise",          price: "Sur demande",          period: "mensuel",          features: [
            "Custom Models",            "SLA Garantie",            "Support Dédié"],
          button: {
            text: "Contacter"},
          imageSrc: "http://img.b2bpic.net/free-vector/illustration-business-concept_53876-37673.jpg"},
      ]}
      title="Tarification API"
      description="Évoluez avec nos capacités de calcul."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Marc L.",          role: "Data Scientist",          testimonial: "Latence ultra faible sur les endpoints.",          imageSrc: "http://img.b2bpic.net/free-photo/confident-senior-businessman-with-digital-tablet_1262-2373.jpg"},
        {
          id: "t2",          name: "Sarah J.",          role: "Analyste",          testimonial: "Enfin une API flexible pour les besoins statistiques.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-happy-man-with-basketball_23-2148239503.jpg"},
        {
          id: "t3",          name: "Thomas V.",          role: "Ingénieur",          testimonial: "Intégration terminée en moins de 2 heures.",          imageSrc: "http://img.b2bpic.net/free-photo/smart-looking-teacher_53876-23045.jpg"},
      ]}
      title="Expériences Utilisateurs"
      description="Les développeurs témoignent de la puissance de nos outils."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Ressources API"
      blogs={[
        {
          id: "b1",          category: "Documentation",          title: "Utilisation des endpoints",          excerpt: "Guide rapide d'intégration.",          imageSrc: "http://img.b2bpic.net/free-vector/scientific-formulas-chalkboard_23-2148478986.jpg",          authorName: "Admin",          authorAvatar: "http://img.b2bpic.net/free-photo/stylish-adult-male-holding-tablet_23-2148673405.jpg",          date: "10 Jan 2025"},
        {
          id: "b2",          category: "Performance",          title: "Optimisation Latence",          excerpt: "Techniques pour des réponses rapides.",          imageSrc: "http://img.b2bpic.net/free-vector/20-data-protection-flat-color-icon-presentation-vector-icons-illustration_1142-15478.jpg",          authorName: "Admin",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-doctor-wearing-lab-coat_23-2149551157.jpg",          date: "12 Jan 2025"},
        {
          id: "b3",          category: "Modélisation",          title: "Moteur Statistique",          excerpt: "Dans les coulisses des calculs.",          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-data-logo-template_23-2149192866.jpg",          authorName: "Admin",          authorAvatar: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",          date: "15 Jan 2025"},
      ]}
      description="Articles techniques pour optimiser vos analyses."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Comment accéder à l'API ?",          content: "Créez un compte et récupérez votre clé API depuis le portail développeur."},
        {
          id: "q2",          title: "Limites de requêtes ?",          content: "Selon votre plan, des quotas sont appliqués par seconde."},
        {
          id: "q3",          title: "Data freshness ?",          content: "Les données sont mises à jour toutes les 15 secondes."},
      ]}
      title="Questions Fréquentes"
      faqsAnimation="slide-up"
      description="Support technique et intégration."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Contact"
      title="Besoin d'assistance ?"
      description="Prenez contact avec notre équipe technique."
      imageSrc="http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160283.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="SportAnalytics"
      copyrightText="© 2025 SportAnalytics API Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
