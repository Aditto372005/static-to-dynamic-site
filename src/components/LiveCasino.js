export function LiveCasino() {
  return `
    <div class="mt-2 flex h-8 items-center mb-1.5 sm:mt-6">
      <div class="flex items-center text-base font-extrabold text-primary">
        <div class="relative mx-4 mr-2 h-2 w-2">
          <div class="absolute left-0 top-0 h-full w-full rounded-full bg-brand z-10"></div>
          <div class="absolute left-0 top-0 h-full w-full rounded-full bg-brand animate-ping"></div>
        </div>
        <div>Recent Big Wins</div>
        <div class="ml-2 hidden gap-2 lg:!flex">
          <button class="button button-m flex-1 p-1 center h-auto whitespace-nowrap rounded-none border-b-2 text-xs font-semibold text-primary border-b-success" type="button">All</button>
          <button class="button button-m flex-1 p-1 center h-auto whitespace-nowrap rounded-none border-b-2 text-xs font-normal text-secondary border-b-transparent" type="button">BC Originals</button>
          <button class="button button-m flex-1 p-1 center h-auto whitespace-nowrap rounded-none border-b-2 text-xs font-normal text-secondary border-b-transparent" type="button">Slots</button>
          <button class="button button-m flex-1 p-1 center h-auto whitespace-nowrap rounded-none border-b-2 text-xs font-normal text-secondary border-b-transparent" type="button">Live Casino</button>
        </div>
      </div>
      <a href="/gamelist/live" class="ml-auto flex h-8 items-center rounded-lg px-2 font-extrabold bg-black_alpha5 dark:bg-layer5 inactive">
        All
        <svg class="icon rotate-180 text-secondary ml-1 size-4" viewBox="0 0 32 32">
          <path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z"></path>
        </svg>
      </a>
    </div>
  `
} 