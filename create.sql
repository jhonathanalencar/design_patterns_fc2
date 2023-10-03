create schema cifer;

create table cifer.loan (
	code text,
	amount numeric,
	period integer,
	rate numeric,
	type text
);

create table cifer.installment (
	loan_code text,
	number integer,
	amount numeric,
	interest numeric,
	amortization numeric,
	balance numeric
);