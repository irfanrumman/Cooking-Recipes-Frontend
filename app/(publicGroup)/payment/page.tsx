import { Suspense } from "react";
import { SparklesIcon } from "lucide-react";
import { PricingSection } from "../_components/payment/PricingSection";
import { PricingSectionLoader } from "../_components/payment/PricingSectionLoader";

const PaymentPage = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-xl space-y-3 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <SparklesIcon className="size-3.5" />
          Cooking Recipes Premium
        </span>
        <h1 className="text-2xl font-semibold sm:text-3xl">Go Premium</h1>
        <p className="text-balance text-sm text-muted-foreground sm:text-base">
          Subscribe to unlock exclusive premium recipes and support the
          creators behind them.
        </p>
      </div>

      <Suspense fallback={<PricingSectionLoader />}>
        <PricingSection />
      </Suspense>
    </div>
  );
};

export default PaymentPage;

