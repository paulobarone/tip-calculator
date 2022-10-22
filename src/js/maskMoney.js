jQuery(function() {
  jQuery(".inputMoney").maskMoney({
    thousands:'.', 
    decimal:','
  })

  jQuery(".inputPercentage").maskMoney({
    thousands:'.', 
    decimal:','
  })
});