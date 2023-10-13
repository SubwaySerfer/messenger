export const tmpl = `
{{#each chatsData}}

<li class="chat-block">
  <img class="chat-block__img" src="{{chatImage}}"/>
  <div class="chat-block__content">
    <h3>{{chatName}}</h3>
    <p><span>{{isILast}}</span>{{lastMessage}}</p>
  </div>
  <h5>{{messageTime}}</h5>
</li>

{{/each}}
`