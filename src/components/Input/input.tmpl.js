export const tmpl = `
<label class="modal-inputs__field_label">{{input_label}}</label>
<input 
class="modal-inputs__field"
           type="{{input_type}}"
           id="{{input_id}}"
           placeholder="{{input_placeholder}}"
           name="{{input_name}}"
           required="{{required}}"
           valid="{{isValid}}"
           minLength="{{input_min}}"
           maxLength="{{input_max}}"
    />
`
