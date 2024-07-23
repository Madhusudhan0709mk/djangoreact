from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('', views.getRoutes),
      path('posts/', views.PostListCreateView.as_view(), name='post_list_create'),
    path('posts/<int:pk>/',views.PostRetrieveUpdateDestroyView.as_view(), name='post_detail')
]