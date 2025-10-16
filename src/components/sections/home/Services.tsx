'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "service1Title",
 *   "text-5": "service1Description",
 *   "text-6": "service1Badge",
 *   "text-7": "service1LearnMore",
 *   "link-0": "service1Link",
 *   "text-8": "service2Title",
 *   "text-9": "service2Description",
 *   "text-10": "service2LearnMore",
 *   "link-1": "service2Link",
 *   "text-11": "service3Title",
 *   "text-12": "service3Description",
 *   "text-13": "service3Badge",
 *   "text-14": "service3LearnMore",
 *   "link-2": "service3Link",
 *   "text-15": "service4Title",
 *   "text-16": "service4Description",
 *   "text-17": "service4LearnMore",
 *   "link-3": "service4Link",
 *   "text-18": "service5Title",
 *   "text-19": "service5Description",
 *   "text-20": "service5LearnMore",
 *   "link-4": "service5Link",
 *   "text-21": "service6Title",
 *   "text-22": "service6Description",
 *   "text-23": "service6LearnMore",
 *   "link-5": "service6Link",
 *   "text-24": "bottomQuestion",
 *   "text-25": "primaryCTA",
 *   "link-6": "primaryCTAHref",
 *   "text-26": "secondaryCTA",
 *   "link-7": "secondaryCTAHref"
 * }
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, Users, Leaf, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ServicesCardGridProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  service1Title?: string;
  service1Description?: string;
  service1Badge?: string;
  service1LearnMore?: string;
  service1Link?: string;
  service2Title?: string;
  service2Description?: string;
  service2LearnMore?: string;
  service2Link?: string;
  service3Title?: string;
  service3Description?: string;
  service3Badge?: string;
  service3LearnMore?: string;
  service3Link?: string;
  service4Title?: string;
  service4Description?: string;
  service4LearnMore?: string;
  service4Link?: string;
  service5Title?: string;
  service5Description?: string;
  service5LearnMore?: string;
  service5Link?: string;
  service6Title?: string;
  service6Description?: string;
  service6LearnMore?: string;
  service6Link?: string;
  bottomQuestion?: string;
  primaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTA?: string;
  secondaryCTAHref?: string;
}

export default function Services({
  badge = 'Our Services',
  mainTitle = 'Sustainable Solutions for',
  mainTitleHighlight = 'Modern Business',
  mainDescription = 'Empower your business with eco-friendly strategies and cutting-edge technology that drives growth while protecting our planet',
  service1Title = 'Green Energy Consulting',
  service1Description = 'Transform your energy infrastructure with renewable solutions that reduce costs and carbon footprint by up to 60%.',
  service1Badge = 'Most Popular',
  service1LearnMore = 'Explore Solutions',
  service1Link = '/temp',
  service2Title = 'Digital Transformation',
  service2Description = 'Modernize your operations with cloud-native solutions that increase efficiency while minimizing environmental impact.',
  service2LearnMore = 'Learn More',
  service2Link = '/temp',
  service3Title = 'Sustainability Analytics',
  service3Description = 'Data-driven insights to track, measure, and optimize your environmental impact with real-time reporting.',
  service3Badge = 'New',
  service3LearnMore = 'View Analytics',
  service3Link = '/temp',
  service4Title = 'Team Training & Development',
  service4Description = 'Upskill your workforce with sustainability practices and green technology implementation strategies.',
  service4LearnMore = 'Start Training',
  service4Link = '/temp',
  service5Title = 'Growth Strategy',
  service5Description = 'Scale your business sustainably with proven frameworks that balance profit with environmental responsibility.',
  service5LearnMore = 'Plan Growth',
  service5Link = '/temp',
  service6Title = 'Innovation Workshops',
  service6Description = 'Collaborative sessions to identify breakthrough opportunities in sustainable business practices and green tech.',
  service6LearnMore = 'Book Workshop',
  service6Link = '/temp',
  bottomQuestion = 'Ready to spark sustainable growth?',
  primaryCTA = 'Start Your Journey',
  primaryCTAHref = '/temp',
  secondaryCTA = 'View Case Studies',
  secondaryCTAHref = '/temp',
}: ServicesCardGridProps) {
  const router = useRouter();

  const handlePrimaryCTA = () => {
    if (primaryCTAHref.startsWith('http://') || primaryCTAHref.startsWith('https://')) {
      window.open(primaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryCTAHref);
    }
  };

  const handleSecondaryCTA = () => {
    if (secondaryCTAHref.startsWith('http://') || secondaryCTAHref.startsWith('https://')) {
      window.open(secondaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(secondaryCTAHref);
    }
  };

  const handleServiceLink = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
  };

  const services = [
    {
      id: 'green-energy',
      title: service1Title,
      description: service1Description,
      icon: Zap,
      badge: service1Badge,
      features: ['60% Cost Reduction', 'Carbon Neutral', 'ROI in 18 months'],
      learnMore: service1LearnMore,
      link: service1Link,
    },
    {
      id: 'digital-transformation',
      title: service2Title,
      description: service2Description,
      icon: TrendingUp,
      badge: null,
      features: ['Cloud Migration', 'Process Automation', 'Green Computing'],
      learnMore: service2LearnMore,
      link: service2Link,
    },
    {
      id: 'sustainability-analytics',
      title: service3Title,
      description: service3Description,
      icon: BarChart3,
      badge: service3Badge,
      features: ['Real-time Tracking', 'ESG Reporting', 'Impact Metrics'],
      learnMore: service3LearnMore,
      link: service3Link,
    },
    {
      id: 'team-training',
      title: service4Title,
      description: service4Description,
      icon: Users,
      badge: null,
      features: ['Expert-led Sessions', 'Certification Programs', 'Ongoing Support'],
      learnMore: service4LearnMore,
      link: service4Link,
    },
    {
      id: 'growth-strategy',
      title: service5Title,
      description: service5Description,
      icon: Leaf,
      badge: null,
      features: ['Sustainable Scaling', 'Market Analysis', 'Strategic Planning'],
      learnMore: service5LearnMore,
      link: service5Link,
    },
    {
      id: 'innovation-workshops',
      title: service6Title,
      description: service6Description,
      icon: Lightbulb,
      badge: null,
      features: ['Design Thinking', 'Innovation Labs', 'Prototype Development'],
      learnMore: service6LearnMore,
      link: service6Link,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <span data-editable="badge">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{mainDescription}</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-accent/20 text-accent-foreground border-accent/30"
                      >
                        <span data-editable={index === 0 ? 'service1Badge' : 'service3Badge'}>
                          {service.badge}
                        </span>
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`service${index + 1}Title`}>{service.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`service${index + 1}Description`}>
                      {service.description}
                    </span>
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn justify-between hover:bg-primary/10 text-primary hover:text-primary"
                    onClick={() => handleServiceLink(service.link)}
                    data-editable-href={`service${index + 1}Link`}
                    data-href={service.link}
                  >
                    <span data-editable={`service${index + 1}LearnMore`}>{service.learnMore}</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
          <p className="text-muted-foreground mb-6 text-lg">
            <span data-editable="bottomQuestion">{bottomQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handlePrimaryCTA}
              data-editable-href="primaryCTAHref"
              data-href={primaryCTAHref}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span data-editable="primaryCTA">{primaryCTA}</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSecondaryCTA}
              data-editable-href="secondaryCTAHref"
              data-href={secondaryCTAHref}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <span data-editable="secondaryCTA">{secondaryCTA}</span>
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
