export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Adresse email requis.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Adresse email invalide.';
    }
    if (!values.password) {
      errors.password = 'Mot de passe requis.';
    } else if (values.password.length < 5) {
      errors.password = 'Le mot de passe doit contenir 5 caractéres minimum';
    }
    return errors;
  };