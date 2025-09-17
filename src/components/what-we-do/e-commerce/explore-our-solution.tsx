import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  affiliateNetworkSetupAndManagementData,
  aiPoweredProductRecommendationSystemsData,
  amazonWalmartEtsyEbayAndShopifyOptimizationData,
  automatedOrderAndInventoryManagementData,
  ecommerceWebsiteAndMarketplaceStoreDevelopmentData,
  servicesSectionTitleData,
} from '@/constants/what-we-do-data/e-commerce-data';
import BorderXPattern from '@/components/shared/border-x-pattern';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="relative border-y bg-[#FEFEFE] px-4 md:px-6 dark:bg-[#030712]">
        <div className="relative space-y-14 border-x py-14 md:space-y-32">
          <Service
            sectionData={ecommerceWebsiteAndMarketplaceStoreDevelopmentData}
          />
          <Service
            sectionData={amazonWalmartEtsyEbayAndShopifyOptimizationData}
          />
          <Service sectionData={affiliateNetworkSetupAndManagementData} />
          <Service sectionData={aiPoweredProductRecommendationSystemsData} />
          <Service sectionData={automatedOrderAndInventoryManagementData} />
          {/* border-x pattern design */}
          <BorderXPattern className="absolute top-0 -left-4 w-4 md:-left-44 md:w-44" />
          <BorderXPattern className="absolute top-0 -right-4 w-4 md:-right-44 md:w-44" />
        </div>
      </div>
    </section>
  );
}
