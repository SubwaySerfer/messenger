export const template = `
<div class="avatar-block" >
  <img src="{{imageUrl}}" alt="user avatar." class="avatar-block__img" />
  <h2 class="avatar-block__title" >{{nameProfile}}</h2>
</div>`;

export const avatarTemplate = `
<div>
<h3>Загрузить</h3>

<form type='change-avatar'>
<label>
<input type='file' name='avatar' />
</label>

{{{buttonSubmit}}}
</form>

</div>
`;
