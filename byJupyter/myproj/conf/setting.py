
import datetime
# 单位
DIR_PATH=r"D:\MyProject\合作项目\TyphoonSys\TyphoonSearchSys\demo_data"
# 家中
# DIR_PATH=r"/Users/casablanca/03project/typhoonSearchSys/demo_data"

FILE_TARGET=r'5622.txt'

MONGO_STATIONTIDEDATA_DOCUMENT_NAME='geostationtidedata'

# 每个时间标志位之间最多存4日的数据
DAYS=4

DEFAULT_VAL=-9999
DEFAULT_DATE=datetime.date(1701,1,1)