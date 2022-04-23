# LowestRates
Question Ones

Please show what MYSQL tables and what classes you would create to accommodate for the
following 2 page form: (You can use any language, or just pseudocode for the classes)
Answer- A Users table will be inserted in the database to display the following fields - First name - Last name - Phone number. 
ie.``` CREATE TABLE users (
Firstname CHAR(20)      DEFAULT ''     NOT NULL,
Lastname  CHAR(20)      DEFAULT ''     NOT NULL,
Phone   INT UNSIGNED DEFAULT '' NOT NULL,);```

Question Two

Now that you have the tables and class models created, please explain what MVC classes you
would create to make this form, and save the form data to the database. (You can use any MVC
frame work in any language, or just pseudocode to demonstrate the MVC pattern)
Answer- Create a function that takes the users data from the form and inserts it to the database.
ie````function users() {
    this.firstname = '';
    this.lastname = '';
    this.phone = ''
}```

Question Three

And how would your MVC classes look like now that you have this new design?
Answer. I would make use of the alter table functionality, which allows me to append onto existing table in the database.
