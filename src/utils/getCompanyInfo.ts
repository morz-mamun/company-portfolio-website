import { companyData } from '@/constants/chat-bot-data';
import { TextPart } from 'ai';

const serviceLinks: Record<string, string> = {
  'AI Automation': '/ai-automation',
  'Web & Software Development': '/web-software-development',
  'Digital Marketing & SEO': '/digital-marketing-seo',
  'SaaS & Affiliate Tools': '/saas-affiliate-tools',
  'E-commerce & Affiliate Services': '/e-commerce-affiliate-service',
  'IoT & Smart Security Solutions': '/iot-smart-security-solutions',
};

const serviceEmojis: Record<string, string> = {
  'AI Automation': '🤖',
  'Web & Software Development': '💻',
  'Digital Marketing & SEO': '📈',
  'SaaS & Affiliate Tools': '☁️',
  'E-commerce & Affiliate Services': '🛒',
  'IoT & Smart Security Solutions': '📹',
};

export function getCompanyInfo(query: TextPart) {
  const normalizedQuery = query.text.toLowerCase();
  const results: string[] = [];

  companyData.forEach((section) => {
    let isRelevant = false;

    // Match query with name, description, details, or features
    if (
      section.name.toLowerCase().includes(normalizedQuery) ||
      (section.description &&
        section.description.toLowerCase().includes(normalizedQuery)) ||
      (section.details &&
        section.details.toLowerCase().includes(normalizedQuery)) ||
      (section.features &&
        section.features.some((f) => f.toLowerCase().includes(normalizedQuery)))
    ) {
      isRelevant = true;
    }

    // Keyword mapping for common queries
    const keywords = [
      ['services', 'services'],
      ['about', 'about-us'],
      ['mission', 'mission'],
      ['vision', 'vision'],
      ['clients', 'clients'],
      ['case study', 'clients'],
      ['contact', 'contact'],
      ['industries', 'industries'],
      ['why choose', 'why-choose-us'],
      ['AI', 'AI Automation'],
      ['web', 'Web & Software Development'],
      ['marketing', 'Digital Marketing & SEO'],
      ['e-commerce', 'E-commerce & Affiliate Services'],
      ['saas', 'SaaS & Affiliate Tools'],
      ['iot', 'IoT & Smart Security Solutions'],
    ];

    for (const [keyword, idOrService] of keywords) {
      if (normalizedQuery.includes(keyword)) {
        if (
          section.id === idOrService ||
          section.features?.some((f) => f.includes(idOrService))
        ) {
          isRelevant = true;
        }
      }
    }

    if (isRelevant) {
      let info = `**${section.name}**\n${section.description}\n`;

      if (section.features) {
        section.features.forEach((f) => {
          const link = serviceLinks[f]
            ? `[Learn more](${serviceLinks[f]})`
            : '';
          const emoji = serviceEmojis[f] || '';
          info += `- ${f} ${emoji} ${link}\n`;
        });
      }

      if (section.details) {
        info += `${section.details}\n`;
      }

      // Dynamic service-specific CTA
      section.features?.forEach((f) => {
        if (normalizedQuery.includes(f.toLowerCase())) {
          const emoji = serviceEmojis[f] || '';
          info += `\n📞 Interested in ${f}? Schedule a consultation ${emoji} or email us at [info@trustglobalcommunication.com](mailto:info@trustglobalcommunication.com) to discuss your project.\n`;
        }
      });

      // General CTA for services or contact-related queries
      if (
        normalizedQuery.includes('service') ||
        normalizedQuery.includes('project') ||
        normalizedQuery.includes('contact') ||
        normalizedQuery.includes('consultation')
      ) {
        info += `\n📞 Schedule a consultation or email us at [info@trustglobalcommunication.com](mailto:info@trustglobalcommunication.com) to discuss your project or business needs.\n`;
      }

      results.push(info);
    }
  });

  return results.slice(0, 3);
}
