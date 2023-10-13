export const tmpl = `
<div class="chat-sidebar">
<div class="chat-sidebar__header">
<a href="/profile" class="chat-sidebar__profile">Профиль</a>
{{{SearchInput}}}
</div>

<div class="chat-sidebar__dialogs">
<ul>
{{{ChatBlock}}}

</ul>
</div>
</div>
`

// {{#each chatsData}}
//   <li>
//     {{chatName}}
//   </li>
// {{/each}}