import React from "react";

function Partner() {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-8">
      <figure class="px-10 pt-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1698276989965-d00e2fff0078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Partner;
