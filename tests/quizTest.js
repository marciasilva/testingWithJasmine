describe("Hello test", function(){
	//Mensagem que sera exibida e funcao de test
	it("should return hello",function(){
		expect(helloWorld()).toEqual("Hello");
	});
});