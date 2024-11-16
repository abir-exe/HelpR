import { Helmet } from "react-helmet-async";

const Features = () => {
  return (
    <div className="text-purple-700 my-5 w-4/5 mx-auto">
      <Helmet>
        <title>Gadget Heaven || FAQ</title>
      </Helmet>
      <div className="collapse collapse-plus bg-base-200 gap-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What types of gadgets are available?
        </div>
        <div className="collapse-content">
          <p>
            We offer a wide range of gadgets, including smartphones, laptops,
            tablets, and accessories. You can explore our categories for the
            latest technology.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I add items to my wishlist for later?
        </div>
        <div className="collapse-content">
          <p>
            Yes! You can add items to your wishlist to view or purchase later.
            Simply click the heart icon next to each product, and it will be
            saved to your wishlist.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I know if an item is in stock?
        </div>
        <div className="collapse-content">
          <p>
            Each product listing shows its availability status. You’ll see
            labels like “In Stock” or “Out of Stock” on the product details
            page.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I track my order?
        </div>
        <div className="collapse-content">
          <p>
            After your purchase, you will receive an email with a tracking
            number. You can use this number to track your order on our website
            or through the courier service.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is the return policy?
        </div>
        <div className="collapse-content">
          <p>
            We offer a 30-day return policy for most items. Make sure to keep
            your original packaging and receipts. For more details, please visit
            our Returns & Refunds page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
