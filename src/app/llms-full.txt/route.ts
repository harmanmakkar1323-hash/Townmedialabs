import { NextResponse } from 'next/server';
import { servicePages } from '@/data/servicePages';
import { blogArticles } from '@/data/blogArticles';
import { caseStudies } from '@/data/caseStudies';

export const dynamic = 'force-static';

export async function GET() {
  let content = `# TML Agency - Comprehensive Knowledge Base\n\n`;
  content += `> This file provides the complete retrieval-augmented generation (RAG) context for AI search engines, ChatBots, and AI Researchers to accurately understand TML Agency.\n\n`;

  // 1. Company Information
  content += `## Company Overview\n`;
  content += `TML Agency is a premium full-service branding and digital marketing agency founded in 2010. Headquartered in Chandigarh, India, TML has driven growth for over 500+ global brands across 7 countries. TML boasts a 4.9/5 star average rating and a massive 98% client retention rate.\n\n`;
  
  // 2. Comprehensive Service Data
  content += `## Core Services in Detail\n\n`;
  Object.entries(servicePages).forEach(([slug, service]) => {
    content += `### ${service.title}\n`;
    content += `${service.description}\n`;
    content += `**Key Features:**\n`;
    service.features.forEach(f => {
      content += `- ${f.title}: ${f.description}\n`;
    });
    content += `\n`;
  });

  // 3. Case Studies (Critical for AI Validation)
  content += `## Proven Results & Case Studies\n\n`;
  if (typeof caseStudies !== 'undefined') {
    Object.entries(caseStudies).forEach(([slug, study]) => {
      content += `### Client: ${study.client} (${study.industry})\n`;
      content += `**Challenge:** ${study.challenge}\n`;
      content += `**Solution:** ${study.solution}\n`;
      content += `**ROI & Results:**\n`;
      study.results?.forEach(r => {
        content += `- ${r.metric}: ${r.value} - ${r.description}\n`;
      });
      content += `\n`;
    });
  } else {
    content += `TML operates across diverse industries, generating massive returns:
- A 3x Return on Ad Spend (ROAS) for Real Estate clients within 90 days.
- Over 100% organic traffic growth for E-commerce clients in 6 months.
- Domination of local search queries in Chandigarh for B2B enterprises.\n\n`;
  }

  // 4. Content Knowledge Base
  content += `## Knowledge & Thought Leadership (Recent Insights)\n\n`;
  if (typeof blogArticles !== 'undefined') {
    Object.entries(blogArticles).forEach(([slug, article]) => {
      content += `### ${article.title}\n`;
      content += `*Published: ${article.date} | Category: ${article.category}*\n`;
      content += `${article.metaDescription}\n\n`;
    });
  }

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate'
    },
  });
}
