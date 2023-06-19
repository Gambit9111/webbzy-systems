import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/server/db';

type QuestionnaireData = {
  businessInfo1?: string;
  businessInfo2?: string;
  businessInfo3?: string;
  businessInfo4?: string;
  websiteObjectives1?: string;
  websiteObjectives2?: string;
  domainInfo1?: string;
  domainInfo2?: string;
  domainInfo3?: string;
  domainInfo4?: string;
  domainInfo5?: string;
  domainInfo6?: string;
  domainInfo7?: string;
  domainInfo8?: string;
  designAndBranding1?: string;
  designAndBranding2?: string;
  designAndBranding3?: string;
  designAndBranding4?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  functionality1?: string;
  functionality2?: string;
  functionality3?: string;
  competitors1?: string;
  competitors2?: string;
  timeline1?: string;
  timeline2?: string;
  cta1?: string;
  cta2?: string;
  seo1?: string;
  seo2?: string;
  seo3?: string;
  seo4?: string;
  analytics1?: string;
  analytics2?: string;
  analytics3?: string;
  analytics4?: string;
  cms1?: string;
  cms2?: string;
  maintenance1?: string;
  maintenance2?: string;
  targetedLocations1?: string;
  targetedLocations2?: string;
  socialMedia1?: string;
  testimonials1?: string;
  testimonials2?: string;
  contentUpdates1?: string;
  contentUpdates2?: string;
  contentUpdates3?: string;
  clientInvolvement1?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData: QuestionnaireData = req.body;
    
    try {
      const createdQuestionnaire = await prisma.questionnaire.create({
        data: formData,
      });

      res.status(200).json({ message: 'Questionnaire data created successfully', data: createdQuestionnaire, id: createdQuestionnaire.id });
    } catch (error) {
      console.error('Error creating questionnaire data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}