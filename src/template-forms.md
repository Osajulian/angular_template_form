Remember to register the forms module in App Module, as this lets Angular take control of any form we hve in any template - without this, Angular wouldn't know anything about the forms we create in our template.
![](md_images/forms1.png)

You have a plethora of HTML5 input types to use from.

### ngForm Directive
When we imported our forms module into our application, we let Angular take over our form by using the ngForm directive. This directive gives us valuable information about our form.
![](md_images/forms2.png)
When Angular parses our template, it'll look for a form tag and add this directive, Angular will see this directive and create an instance of ngForm

### ngModel Directive
When building a fomr, the ngMOdel needs to be placed in every field we want Angular to know about, it helps us build the individual form control input's value object.
Note: for ngModel to work, you need a name attribute set for the input field.

### HTML5 Field Validation
![](md_images/form3.png)

ngNativeValidate will allow the browser to validate each control map. Angular turns this off by default because there are many differences between the various browsers
![](md_images/form4.png)

In the context of HTML field input elements, blur means lose focus, like tabbing off the field or hitting a submit button to cause the field to lose focus.

### Validation classes in Angular
![](md_images/form5.png)

ng-untouched - before blur
ng-touched - after blur

ng-pristine - before modification of field value
ng-dirty - after modification of field value

ng-valid, ng-invalid - based on the other field's attribute validation values

### Classes and Associated and NgModel Properties
![](md_images/form6.png)
![](md_images/form7.png)


ngSubmit
![](md_images/form8.png)

