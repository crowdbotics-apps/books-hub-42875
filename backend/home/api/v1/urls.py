from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet, PopularBooksViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("popular_books", PopularBooksViewSet, basename="popular_books")

urlpatterns = [
    path("", include(router.urls)),
]
