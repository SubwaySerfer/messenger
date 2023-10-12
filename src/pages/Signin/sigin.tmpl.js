export const tmpl = `
<div class="modal-window">
<h1 class="modal-window__title">{{title}}</h1>

<form class="form">
<div class="modal-inputs">
{{{InputEmail}}}
{{{InputLogin}}}
{{{InputFirstName}}}
{{{InputLastName}}}
{{{InputPhone}}}
{{{InputPassword1}}}
{{{InputPassword2}}}
</div>

<div class="modal-buttons">
{{{ButtonSubmit}}}
{{{ButtonLink}}}
</div>
</form>
</div>
`