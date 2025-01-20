export function Banner() {
  return `
    <div class="banner-bg pt-content relative -mx-4 -mt-4 sm:mx-0 sm:mt-0 sm:pt-0">
      <div class="relative mx-4 overflow-hidden rounded-xl bg-layer4 aspect-[1.7] bg-cover bg-repeat-x sm:mx-0 sm:aspect-[4.6]" 
           style="background-image: linear-gradient(to right, rgb(8, 172, 91), transparent 40%), url('https://bc.game/assets/bg_w-DdW8hRgr.svg');">
        <img class="absolute right-0 top-0 h-full" src="https://bc.game/assets/banner-DCWqOOaK.png">
        <img class="absolute rounded-lg right-[2%] top-[50%] w-[5.3%] translate-y-[-50%]" src="https://bc.game/assets/icon-CIC3kVNQ.png">
        <img class="absolute top-0 hidden left-[1.5%] h-[96%] sm:block" src="https://bc.game/assets/logo_w-DVOxoSHE.png">
        
        <div class="absolute top-0 flex h-full flex-col py-4 left-3 origin-top sm:left-[14%] sm:top-[6%] sm:h-auto sm:items-center sm:py-0 sm:text-center" style="transform: scale(0.928938);">
          <p class="text-2xl font-extrabold text-primary sm:text-3xl">Stay Untamed</p>
          <div class="rounded-xl text-lg font-semibold mt-3 p-0 sm:mt-4 sm:bg-[#B0FFD833] sm:px-15 sm:py-3 sm:backdrop-blur-sm dark:sm:bg-black_alpha20">
            <div class="text-base font-semibold sm:text-lg">Sign Up & Get</div>
            <span class="text-xl font-extrabold sm:mt-1 sm:text-2xl">UP TO</span>
            <span class="text-xl font-extrabold ml-1 bg-gradient-to-r sm:text-2xl text-[#2CD97D] bg-clip-text">BDT&nbsp;2,426,775.15</span>
            <div class="text-base font-semibold sm:text-lg">in Casino or Sports</div>
          </div>
          <button class="button button-brand button-m h-10 mt-auto w-28 sm:mt-5 sm:w-60" type="button">Join Now</button>
        </div>
      </div>
    </div>
  `
} 