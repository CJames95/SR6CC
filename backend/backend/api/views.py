from django.shortcuts import render
from django.http import JsonResponse
from .models import Weapons
from .models import Qualities
from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.

@ensure_csrf_cookie
def weapons(request, type):
    weapons = Weapons.objects.filter(type=type).values()
    for weapon in weapons:
        if not weapon['close']:
            weapon['close'] = '-'
        if not weapon['near']:
            weapon['near'] = '-'
        if not weapon['medium']:
            weapon['medium'] = '-'
        if not weapon['far']:
            weapon['far'] = '-'
        if not weapon['extreme']:
            weapon['extreme'] = '-'

        if weapon['legal'] is True:
            weapon['availability'] = str(weapon['availability']) + ' (L)'
        else:
            weapon['availability'] = str(weapon['availability']) + ' (I)'
        
        weapon['cost'] = str(weapon['cost']) + '¥'

    return JsonResponse(list(weapons), safe=False)

def qualities(request):
    qualities = Qualities.objects.values()
    return JsonResponse(list(qualities), safe=False)