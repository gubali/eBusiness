import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
let bookDetails = [
    {id:1, name:'Angular2'},
    {id:2, name:'Angular4'},
    {id:3, name:'Angular6'}

];
return {books:bookDetails};
    }
}