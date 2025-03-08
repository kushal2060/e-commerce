const Footer = () => {
    return (
      <div>
        <footer className="bg-neutral-900 mx-5 px-20 py-10 rounded-md mt-5 mb-5">
        <div className="  space-y-28">
          <div className="display: flex justify-between font-Inter">
            {/*top left logo and heading */}
            <div className="font-light text-sm text-white  space-y-4">
              <p className="font-bold text-lg">FROM THE GROUND UP</p>
              <p>Raw Nutrition Sport Suppliment</p>
              <p>RAW</p>
            </div>
            {/* top middle SHOP section*/}
            <div className="font-light text-sm text-white space-y-4 ">
              <p className="font-bold text-lg">SHOP</p>
                <div className="space-y-2">
                <p><a href="" className="hover:text-slate-300 cursor-pointer">Supplements</a></p>
                <p><a href="" className="hover:text-gray-300 cursor-pointer">Military & First Responder Discount</a></p>
                <p><a href="" className="hover:text-gray-300 cursor-pointer">Store Locator</a></p>
                <p><a href="" className="hover:text-gray-300 cursor-pointer">Wholesale</a></p>
                <p><a href="" className="hover:text-gray-300 cursor-pointer">International Distributors</a></p>
                <p><a href="" className="hover:text-gray-300 cursor-pointer">Revive Supplements</a></p>
              </div>
            </div>

            {/* top_middle_middle COMPANY section*/}
            <div className="font-light text-sm text-white space-y-4">
            <p className="font-bold text-lg">COMPANY</p>
            <div className="space-y-2">
              <p><a href="" className="hover:text-slate-300 cursor-pointer">Informed sport</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Contact</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Careers</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Terms Of Use</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Privacy Policy</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Prop 65</a></p>
              <p><a href="" className="hover:text-gray-300 cursor-pointer">Shipping And Returns</a></p>
            </div>
          </div>

            {/* top right email section */}
            <div className="font-light text-sm display: flex flex-col gap-4 text-white">
              <p>Subscribe to get news and special offers.</p>
              <input type="email" name="email" id="enter email"placeholder="Enter email" className="h-10 w-80 mt-4 placeholder-padding text-black" />
              <button className="bg-red-600 hover:bg-neutral-900 h-10 w-28 ">Sign up</button>
            </div>
          </div>
          {/* bottom and copyright section*/}
          <div className="font-light text-xs text-white">
            <p>© 2024 Get Raw Nutrition.</p>
            <p>*These statements have not been evaluated by the Federal Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Please, consult your physician. Testimonials and products reviews reflect individual peoples unique experiences and opinions and should not be viewed as professional advice. Individual results may vary.</p>
          </div>
        </div>
      </footer>
      </div>
    )
  }
  export default Footer