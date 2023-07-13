const random = () =>{
    const rand_num=Math.ceil(Math.random()*5);

    switch (rand_num) {
        case 1:
          return "Hi I can't come to the phone right now";
          break;
        case 2:
          return "Be cool stay in school";
          break;
        case 3:
          return "Don't do drugs";
          case 4:
          return "wax on wax off";
          break;
          case 5:
          return "I'm running out of ideas";
          break;
          break;
        default:
          console.log('Selected fruit is unknown');
      }
}
console.log(random());