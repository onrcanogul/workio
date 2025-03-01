using System.Linq.Expressions;

namespace Workio.Infrastructure.Extensions;

public static class QueryableExtension
{
    public static IQueryable<TSource> WhereIf<TSource>(this IQueryable<TSource> source, bool condition, Expression<Func<TSource, bool>> predicate)
    {
        return condition ? source.Where(predicate) : source;
    }
}