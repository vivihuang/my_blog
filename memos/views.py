from django.http import HttpResponse
from django.template import loader
from .models import Memo


def index(request):
    memo_list = Memo.objects.all()
    template = loader.get_template('memos/index.html')
    context = {
        'memo_list': memo_list,
    }
    return HttpResponse(template.render(context, request))
