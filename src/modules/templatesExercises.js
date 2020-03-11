//templates exercises

export const tagFunction = (stringsTemplate,...inputs) => {
  console.log(stringsTemplate);
  if (stringsTemplate.raw) {
      console.log('Shows raw template with escape chars');
      console.log(stringsTemplate.raw);
  }
  console.log(inputs);
};

export const tmpl = (persons) => `
    <table>
    ${persons.map((person) => `
        <tr><td>${person.first}</td></tr>
        <tr><td>${person.last}</td></tr>
    `).join('')}
    </table>
`;
