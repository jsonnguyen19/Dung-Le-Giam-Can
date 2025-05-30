import { Section } from "@/components/ui/Section";
import { OrderForm } from "@/components/form/OrderForm";

export const OrderSection = () => {
  return (
    <Section
      id="order"
      title="Đặt hàng ngay"
      subtitle="Điền thông tin của bạn để đặt hàng qua Zalo"
      className="bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <OrderForm />
      </div>
    </Section>
  );
};
