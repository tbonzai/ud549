function AddressBook(){
	var self = this;

	this.contacts = [];

	this.addContact = function(contact) {
		self.contacts.push(contact);
	};

	this.getContact = function(index) {
		return self.contacts[index];
	};
}