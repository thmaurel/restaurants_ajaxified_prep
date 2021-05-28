json.pouet do
  'coucou'
end

if @review.persisted?
  json.form do
    json.partial! 'reviews/form.html.erb', restaurant: @restaurant, review: Review.new
  end
  json.inserted_item do
    json.partial! 'restaurants/review.html.erb', review: @review
  end
else
  json.form do
    json.partial! 'reviews/form.html.erb', restaurant: @restaurant, review: @review
  end
end
