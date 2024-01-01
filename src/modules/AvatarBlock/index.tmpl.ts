export const template = `
<div class="avatar-block" >
  <img src="{{imageUrl}}" alt="user avatar." class="avatar-block__img" />
  <h2 class="avatar-block__title" >{{nameProfile}}</h2>
</div>
{{{AvatarModal}}}
`;

export const avatarTemplate = `

<form type='change-avatar' class='avatar-modal'>

<h3 class="avatar-block__title">Загрузить</h3>

<label>
<input type='file' name='avatar' />
</label>

{{{buttonSubmit}}}
</form>
`;
