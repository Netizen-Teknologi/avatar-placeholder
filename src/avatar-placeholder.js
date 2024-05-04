
  async function avatarRandom() {
    const url = 'https://avatar.iran.liara.run/public';
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const uri = URL.createObjectURL(blob);

      return uri;
    //   setAvatarUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function avatarRandomByGender(gender) {
    if (gender !== 'boy' && gender !== 'girl') {
      console.log('avatarRandomByGender, gender is neither boy nor girl');
      return false;
    } 

    const url = 'https://avatar.iran.liara.run/public/'+gender;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const uri = URL.createObjectURL(blob);

      return uri;
    //   setAvatarGenderUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function avatarByName(name) {
    if ( !name ) {
        console.log('avatarByName, please fill the name');
        return false;
    }

    const url = 'https://avatar.iran.liara.run/public?username='+name;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const uri = URL.createObjectURL(blob);

      return uri;
    //   setAvatarBasedNameUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }

  async function avatarByInitial(name) {
    if ( !name ) {
        console.log('avatarByInitial, please fill the name');
        return false;
    }

    const url = 'https://avatar.iran.liara.run/username?username='+name;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const uri = URL.createObjectURL(blob);

      return uri;
      //   setAvatarInitialUri(uri); 
    } catch (error) {
      console.error('Error fetching image:', error.message);
    }
  }


  module.exports = {
    avatarRandom,
    avatarRandomByGender,
    avatarByName,
    avatarByInitial
  };