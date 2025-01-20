export function Footer() {
  return `
    <footer class="footer-bg mt-auto py-6 px-4">
      <div class="max-w-[1248px] mx-auto">
        <div class="flex flex-col lg:flex-row gap-y-8">
          <div class="flex-1">
            <img src="/assets/logo-dark.png" alt="BC.GAME" class="h-8 mb-4">
            <p class="text-secondary text-sm mb-4">Best Crypto Gambling Platform</p>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:flex-1">
            <div>
              <h3 class="text-primary font-semibold mb-4">About Us</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-secondary hover:text-brand">About BC.GAME</a></li>
                <li><a href="#" class="text-secondary hover:text-brand">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-third mt-8 pt-8 text-center text-secondary text-sm">
          <p>© 2024 BC.GAME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
} 