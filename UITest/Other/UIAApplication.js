/*var succeed = true;
var failed = false;

UIAApplication.prototype.target = UIATarget.localTarget();

UIAApplication.prototype.back = function ()
{
    var navigation = this.mainWindow().navigationBar();
    if (navigation)
	{
	    var backButton = navigation.leftButton();
	    if (backButton && backButton.checkIsValid())
		{
		    backButton.tap();
		    return succeed;
		}
	    else
		{
		    this.error("Back button is invalid");
		}
	}
    else
	{
	    this.error("NavigationBar is invalid");
	}

    return failed;
};

UIAApplication.prototype.selectTab = function (nameOrIndex)
{
    var tabbar = this.mainWindow().tabBar();
    if (tabbar && tabbar.checkIsValid())
	{
	    var tabs = tabbar.buttons();
	    if (tabs && tabs.length>0)
		{
		    var theBar = tabs[nameOrIndex];
		    if (theBar && theBar.checkIsValid())
			{
			    theBar.tap();
			    return succeed;
			}
		    else
			{
			    this.error("Tabbar button is invalid");
			}
		}
	}
    else
	{
	    this.error("Tabbar is invalid");
	}
    return failed;
};

UIAApplication.prototype.selectCell = function (nameOrIndex)
{
    var tableView = this.mainWindow().tableViews()[0];
    if (tableView && tableView.checkIsValid())
	{
	    var cell = tableView.cells()[nameOrIndex];
	    if (cell && cell.checkIsValid())
		{
		    cell.scrollToVisible();
		    cell.tap();
		    return succeed;
		}
	    else
		{
		    this.error("Cell is invalid");
		}
	}
    else
	{
	    this.error("TableView is invalid");
	}

    return failed;
};

UIAApplication.prototype.forEach = function (action)
{
    if (typeof action === 'function')
	{
	    var tableView = this.mainWindow().tableViews()[0];
	    if (tableView && tableView.checkIsValid())
		{
		    var cells = tableView.cells();
		    if (cells && cells.length > 0)
			{
			    for (var index = 0; index < cells.length; index ++)
				{
				    var cell = cells[index];
				    if (cell.checkIsValid())
					{
					    cell.scrollToVisible();
					    if (action(index, cell) != succeed)
						{
						    this.error("Action failed");
						    return failed;
						};
					}
				    else
					{
					    this.error("Cell is invalid");
					}
				}
			    return succeed;
			}
		}
	    else
		{
		    this.error("TableView is invalid");
		}
	}
    else
	{
	    this.error("Action can not be done");
	}

    return failed;
};

UIAApplication.prototype.log = function (message)
{
    UIALogger.logPass(message);
};

UIAApplication.prototype.warn = function (message)
{
    UIALogger.logWarnning(message);
};

UIAApplication.prototype.fail = function (message)
{
    UIALogger.logFail(message);
};

UIAApplication.prototype.error = function (message)
{
    UIALogger.logError(message);
};

UIAApplication.prototype.wait = function (second)
{
    this.target.delay(parseInt(second));
};*/
