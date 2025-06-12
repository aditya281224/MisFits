import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterbox from "../components/NewsLetterBox"
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]"></img>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Misfits is a bold and trend-driven e-commerce clothing brand made
            for Gen Z. From streetwear staples to statement pieces, Misfits
            blends individuality with attitude, empowering you to dress
            unapologetically. We don’t follow trends — we set them. Shop now to
            stand out, stay original, and wear your vibe.
          </p>
          <p>
            Misfits is more than just a clothing store — it's a lifestyle for
            Gen Z rule-breakers. Built for those who dare to be different, we
            blend bold designs with street-savvy fashion to help you express
            your real, raw self. Whether you're into oversized fits, edgy
            prints, or minimalist staples, Misfits has a vibe for every mood.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We champion self-expression, inclusivity, and unapologetic style —
            because you weren’t born to blend in. With drops that stay fresh and
            prices that won’t kill your budget, Misfits is your go-to for
            standing out, not fitting in.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Misfits, quality isn’t optional — it’s guaranteed. Every piece
            goes through strict quality checks to ensure premium fabric, perfect
            stitching, and lasting wear. From design to delivery, we’re
            committed to giving you clothing that not only looks bold but feels
            built to last.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shopping at Misfits is designed to be fast, easy, and hassle-free.
            With a smooth user experience, quick checkouts, secure payments, and
            doorstep delivery, we make sure your style is just a few clicks
            away. No stress — just fresh fits, right when you need them.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
           At Misfits, we're here for you — always. Our customer support team is friendly, responsive, and ready to help with anything you need, from order updates to style advice. Got a question or an issue? We’ve got your back, every step of the way.
          </p>
        </div>
        
      </div>

      <NewsLetterbox/>
    </div>
  );
};

export default About;
