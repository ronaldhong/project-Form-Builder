var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

let select= document.createElement('select');
let divTag= document.createElement('div');
let spanTag=document.createElement('span');

for (let i =0; i<formData.length; i++){
  let signUp = document.querySelector('#signUp');
  let input = document.createElement('input');

  if (formData[i].type !== 'select' ){
      input.placeholder=formData[i].label;
      input.type=formData[i].type;
      input.id=formData[i].id;
      spanTag.setAttribute('class', 'fa '+formData[i].icon);
      divTag.appendChild(spanTag);
      divTag.appendChild(input);
      signUp.appendChild(divTag);
      spanTag=document.createElement('span');
      divTag=document.createElement('div');
  }

  else{
    let option=document.createElement('option');
    option.textContent=formData[i].label;
    select.appendChild(option);


    for (let j=0; j<formData[i].options.length;j++){
      option=document.createElement('option');
      option.class=
      option.textContent=formData[i].options[j].label;
      select.appendChild(option);
    }
    signUp.appendChild(select);
  }
}
