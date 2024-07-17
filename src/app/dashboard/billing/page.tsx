import BillingForm from "@/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe"


export default async function Temp(){
    const subscriptionPlan=await getUserSubscriptionPlan();
    return (
        <div>
     <BillingForm subscriptionPlan={subscriptionPlan} />
        </div>
    )
}