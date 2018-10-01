import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      id: 1,
      uuid: 'ee65634d3fe6c0790e8ffa907b862d40',
      title: 'abra',
      content: 'lorem ipsum dolor sit emet 123',
      status: 1
    },{
      id: 2,
      uuid: '1f535736499f8a12625c3036267657ef',
      title: 'cadabra',
      content: 'alahamora minuette kuzmmin',
      status: 1
    },{
      id: 3,
      uuid: 'a4a6a304e8074521ac4697c5324571a5',
      title: 'gendelf white',
      content: 'wakkaf wakkaf amnalla batuhak',
      status: 0
    }];
  }
});
