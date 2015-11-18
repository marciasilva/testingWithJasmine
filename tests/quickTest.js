/*Creating a test with jasmine framework and runnint it on testem enviroment*/
describe("A quiz",function(){
	it("should have a default score of 0",function(){
		var quiz = new Quiz;
		expect(quiz.score).toBe(0);
	});

	it("should have a title",function(){
		var quiz = new Quiz("My first test");
		//Independente do valor checa se esta declarado
		expect(quiz.title).toBeDefined();

		//Precisa de ser um valor valido
		expect(quiz.title).toBeTruthy();
	});

});

describe("Hello test", function(){
	//Mensagem que sera exibida e funcao de test
	it("should return hello",function(){
		expect(helloWorld()).toEqual("Hello");
	});
});