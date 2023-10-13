export const tmpl = `
{{#each chatsData}}

<li class="chat-block">
  <img class="chat-block__img" src="{{chatImage}}"/>
  <div class="chat-block__content">
    <h3 class="chat-block__content-name">{{chatName}}</h3>
    <p class="chat-block__content-text"><span>{{isILast}}</span>{{lastMessage}}</p>
  </div>
  <h5 class="chat-block__time">{{messageTime}}</h5>
</li>

{{/each}}
`