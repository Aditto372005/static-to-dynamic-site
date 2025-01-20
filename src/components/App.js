import { Header } from './Header'
import { Banner } from './Banner'
import { LiveCasino } from './LiveCasino'
import { GameGrid } from './GameGrid'
import { Sidebar } from './Sidebar'
import { ChatNotice } from './ChatNotice'
import { DialogRoot } from './DialogRoot'
import { OfflineTip } from './OfflineTip'

export function App() {
  return `
    <div id="root">
      <div class="explore-close side-unfold chat-fold">
        <div class="header">
          ${Header()}
        </div>

        <div class="sidebar hidden sm:block">
          ${Sidebar()}
        </div>

        <div class="page-content relative z-10 w-full px-4 mx-auto max-w-[1248px]">
          <div class="banner-bg pt-content relative -mx-4 -mt-4 sm:mx-0 sm:mt-0 sm:pt-0">
            ${Banner()}
          </div>
          ${LiveCasino()}
          ${GameGrid()}
        </div>

        <div class="explore"></div>
        <div class="chat-notice">
          ${ChatNotice()}
        </div>
        ${OfflineTip()}
        ${DialogRoot()}
        <div class="root-layer"></div>
      </div>
    </div>
  `
} 